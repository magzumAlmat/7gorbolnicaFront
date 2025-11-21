"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Documents from "@/components/documents";
import CreateDocument from "@/components/createdocument";
export default function ProjectDocumentsPage() {
  const router = useRouter();
  const pathname = useParams();
  console.log('Сработала страница projects[id]',pathname.id);
  return (
    <>
      <Documents id={pathname.id} />
      <CreateDocument id={pathname.id}/>
    </>
  );
}
