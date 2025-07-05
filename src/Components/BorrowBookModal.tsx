
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

import { Input } from './ui/input';
import type { IBook } from '@/interfaces/Book';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';
import { useBorrowBookMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';
import { useState } from 'react';



const BorrowBookModal = ({ book }: { book: IBook }) => {
    const [open, setOpen] = useState(false)
    const form = useForm()
    const [createBorrow] = useBorrowBookMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const res = await createBorrow({ ...data, book: book._id })
        console.log(res);
        // toast.error(res.error.data.error.message);
       
        if (res && 'error' in res && res.error && typeof res.error === 'object' && 'data' in res.error && (res.error as any).data?.error?.message) {
            toast.error((res.error as any).data.error.message)
        }
        else if (res && 'data' in res && (res.data as any)?.message) {
            toast.success((res.data as any).message)
            setOpen(false)
            form.reset()
        }
        else {
            toast.error("An unexpected error occurred.")
        }

    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <form>
                    <DialogTrigger asChild>
                        <button className='bg-none border-none '>Borrow</button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Borrow Books</DialogTitle>
                            <DialogDescription className='sr-only'>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Quantity</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Quantity" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="dueDate"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Due Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-[240px] pl-3 text-left font-normal",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    new Date(field.value).toLocaleDateString()
                                                                ) : (
                                                                    <span>Due Date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}

                                                            // disabled={(date) =>
                                                            //     date > new Date() || date < new Date("1900-01-01")
                                                            // }
                                                            captionLayout="dropdown"
                                                        />
                                                    </PopoverContent>
                                                </Popover>

                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Borrow</Button>
                                </form>
                            </Form>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
};

export default BorrowBookModal;