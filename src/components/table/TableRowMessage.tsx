import { motion } from 'framer-motion'
import { AiFillDelete } from 'react-icons/ai'
import { BadgeAction } from '../badge/BadgeAction'
import { Eye } from 'lucide-react'

interface TableRowMarkingProps {
  rowItem: any
  handleDeleteRow: (action: string) => void
  openModalSeeRow: (action: any) => void
  openModalEditRow: (action: any) => void
}

export function TableRowMarking({
  rowItem,
  openModalSeeRow,
  handleDeleteRow
}: TableRowMarkingProps) {
  return (
    <motion.tr
      // initial={{ opacity: 0, y: -50 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -50 }}
      className="border-b dark:border-gray-700 hover:bg-gray-100/40 dark:hover:bg-gray-700/40 transition-all duration-300 cursor-pointer"
    >
      <td className="px-3 py-3 min-w-[6rem]">
        <p className="flex flex-row justify-start items-center">
          #{rowItem.id}
        </p>
      </td>
      <td className="px-3 py-3 min-w-[6rem]">
        <p className="flex flex-row justify-start items-center">
          {rowItem.tipo_consulta}
        </p>
      </td>
      <td className="px-3 py-3 min-w-[6rem]">
        <p className="flex flex-row justify-start items-center">
          {rowItem.especialidade}
        </p>
      </td>
      <td className="px-3 py-3 min-w-[6rem]">
        <p className="flex flex-row justify-start items-center">
          {rowItem.medico}
        </p>
      </td>
      <td className="px-3 py-3 min-w-[6rem]">
        <p className="flex flex-row justify-start items-center">
          {rowItem.estado}
        </p>
      </td>
      <td className="px-3 py-3 min-w-[6rem]">
        <p className="flex flex-row justify-start items-center">
          {rowItem.data} - {rowItem.hora}
        </p>
      </td>
      <td className="px-3 py-3 min-w-[6rem]">
        <div className="flex flex-row justify-start items-center gap-4">
          <BadgeAction
            color="blue"
            icon={Eye}
            onclickBtn={() => openModalSeeRow(rowItem)}
          />
          <BadgeAction
            color="red"
            icon={AiFillDelete}
            onclickBtn={() => handleDeleteRow(rowItem.id as string)}
          />
        </div>
      </td>
    </motion.tr>
  )
}
