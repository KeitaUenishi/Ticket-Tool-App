import { Header } from "@/components/common/header";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { Button } from "react-daisyui";

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

type Props = {
  data: Person[];
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
  }),
  columnHelper.accessor("id", {
    cell: function Cell({ row: { original } }) {
      const id = original.id;
      return (
        <Link href={`/detail/${id}`}>
          <Button color="accent">詳細</Button>
        </Link>
      );
    },
  }),
];

export const getStaticProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("http://localhost:3000/api/testTable");
  const data = await response.json();

  const props: Props = {
    data,
  };
  console.log(data);
  return { props };
};

// ダッシュボード
export default function Home({ data }: Props) {
  // const [data, setData] = useState(() => [...defaultData]);
  // const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <div className="mt-48 mb-48 pr-24 pl-24">
          <div className="mx-auto mb-24 flex justify-center">
            <h2 className="text-4xl">イベントリスト</h2>
          </div>
          <div className="flex justify-start mb-8">
            <Button color="info">行追加</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-8">
            <Button color="success">保存</Button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
