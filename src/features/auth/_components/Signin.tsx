import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthMutation } from '@/hooks/useAuthMutation'

const Signin = () => {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_IN',
        onSuccess: () => {
            toast({
                description: 'Đăng nhập thành công!',
                variant: 'success'
            }),
                setTimeout(() => {
                   
                   window.location.href="/admin" 
                }, 1000)
        }
    })
    return (
        <div className='my-14 container mx-auto'>
            <Form {...form}>
                <h1 className='text-center font-bold text-2xl'>Đăng Nhập</h1>
                <form
                    className='w-2/4 my-6 mx-auto space-y-6 bg-green-200 p-8 rounded'
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Nhập Email của bạn!' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Nhập mật khẩu của bạn!' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-between mx-2 items-center'>
                        <Button className='mt-4'>Đăng nhập</Button>
                        <Link to={'/signup'}>Chưa có tài khoản!</Link>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default Signin