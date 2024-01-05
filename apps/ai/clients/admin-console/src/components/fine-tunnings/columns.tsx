import { formatStatus } from '@/lib/utils'
import { FineTuningModel } from '@/models/api'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

export const finetunningsColumns: ColumnDef<FineTuningModel>[] = [
  {
    id: 'alias',
    header: 'Name',
    cell: ({ row }) => {
      const { id, alias } = row.original
      return <div>{alias || id}</div>
    },
  },
  {
    id: 'created_at',
    header: () => <div className="min-w-[5rem]">Created at</div>,
    accessorKey: 'created_at',
    cell: ({ row }) => {
      const date: string = row.getValue('created_at')
      return date ? format(new Date(date), 'PP') : '-'
    },
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    cell: ({ row }) => formatStatus(row.getValue('status')),
  },
]