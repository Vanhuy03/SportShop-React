import { IProduct } from '@/interfaces/Product'
import { formatPrice } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'

export const getColumns = (removeProduct: any): ColumnDef<IProduct>[] => [
    {
        accessorKey: 'name',
        header: () => <span className='font-bold'>Tên sản phẩm</span>
    },
    {
        accessorKey: 'price',
        header: 'Giá',
        cell: ({ row }) => {
            const formattedPrice = formatPrice(row.getValue('price') || 0)

            return <div dangerouslySetInnerHTML={{ __html: formattedPrice }} />
        }
    },
    
        {
            accessorKey: 'image',
            header: () => <span className='font-bold'>Ảnh sản phẩm</span>,
            cell: ({ row }) => {
              const image = row.getValue('image')
              return (
                <>
                  {image ? (
                    <img src={image} alt="Product Image" width={100} height={100}/>
                  ) : (
                    <span>No image</span>
                  )}
                </>
              );
            }
          },
          {
            accessorKey: 'desc',
            header: () => <span className='font-bold'> Mô tả sản phẩm</span>
          },
    {
        accessorKey: '',
        header: 'Hành động',
        cell: ({ row }) => {
            return (
                <>
                    <Link to={`/admin/products/edit/${row?.original.id}`}>Chỉnh sửa</Link>
                    <Button onClick={() => removeProduct(row?.original!)}>Xóa</Button>
                </>
            )
        }
    }
]
