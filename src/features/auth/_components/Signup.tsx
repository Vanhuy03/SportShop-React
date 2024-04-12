import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuthMutation } from '@/hooks/useAuthMutation'

const SignupPage = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_UP',
        onSuccess: () => {
            toast({
                description: 'Đăng ký thành công',
                variant: 'success'
            })
            form.reset()
        }
    })
    return (
        <div>
            <Form {...form}>
           
                <form  className='w-2/4 my-6 mx-auto space-y-6 bg-green-200 p-8 rounded'
                onSubmit={form.handleSubmit(onSubmit)}>
                     <h1 className='text-center font-bold text-2xl'>Đăng Ký</h1>
                    <FormField
                        name='name'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='name' {...field} placeholder='Tên của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Email của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Password của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='confirmPassword'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Nhập lại mật khẩu của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit' variant='destructive'>
                        Đăng ký
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignupPage