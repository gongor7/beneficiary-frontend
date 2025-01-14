"use client"
import { InputCustom } from "@/components/input";
import React from "react";

interface AffiliateProps {
  affiliate: any
}

export const EntryInfo:React.FC<AffiliateProps> = React.memo(({ affiliate }) => (
  <fieldset className="border border-gray-400 rounded-md p-4 mb-1">
    <legend className="text-sm uppercase px-2 font-semibold">
      Datos de ingreso policial
    </legend>
    <div className="flex gap-6">
      <div className="flex flex-col w-1/2 space-y-2">
        <InputCustom
          label="Fecha de ingreso"
          value={affiliate.dateEntry ?? 'Sin dato'}
          type="date"
        />
      </div>
      <div className="flex flex-col w-1/2 space-y-2">
        <InputCustom
          label="Matricula"
          value={affiliate.registration ?? 'Sin dato'}
          type="text"
        />
      </div>
    </div>
  </fieldset>
))
