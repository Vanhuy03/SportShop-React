import { useProductMutation } from '@/hooks/useProductMutation'
import { Button } from '../../../components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { useToast } from '../../../components/ui/use-toast'

const Add = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useProductMutation({
        action: 'ADD',
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Chúc mừng thanh niên!!',
                description: 'Em đã thêm sản phẩm thành công'
            })
            form.reset()
        }
    })
    return (
        <div className='border p-6'>
            <h2 className='text-xl font-bold'>Thêm sản phẩm</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Tên sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder='Tên sản phẩm' {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Giá</FormLabel>
                                <FormControl>
                                    <Input placeholder='Giá sản phẩm' {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    ></FormField>
                     <FormField
                        control={form.control}
                        name='image'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Ảnh</FormLabel>
                                <FormControl>
                                    <Input placeholder='Ảnh sản phẩm' {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    ></FormField>
                     <FormField
                        control={form.control}
                        name='desc'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Mô tả</FormLabel>
                                <FormControl>
                                    <Input placeholder='Mô tả sản phẩm' {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit'>Thêm</Button>
                </form>
            </Form>
        </div>
    )
}

export default Add
