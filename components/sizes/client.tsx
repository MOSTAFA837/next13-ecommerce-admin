"use client";

import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "../ui/data-table";
import { ApiList } from "../ui/api-list";

interface Props {
  data: SizeColumn[];
}

export default function SizeClient({ data }: Props) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for sizes" />

      <Separator />

      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
}
