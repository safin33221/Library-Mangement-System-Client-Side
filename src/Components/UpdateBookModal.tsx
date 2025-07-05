import type { IBook } from '@/interfaces/Book';
import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter,
    DialogHeader, DialogTitle, DialogTrigger
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Form, FormControl, FormField, FormItem, FormLabel
} from './ui/form';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Switch } from './ui/switch';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from './ui/select';
import { FaEdit } from 'react-icons/fa';

const UpdateBookModal = ({ book }: { book: IBook }) => {
    const [open, setOpen] = useState(false);
    console.log(book);

    const form = useForm({
        defaultValues: {
            title: book.title,
            description: book.description,
            author: book.author,
            isbn: book.isbn,
            genre: book.genre ? book.genre : '',
            copies: book.copies,
            available: book.available
        }
    });

    useEffect(() => {
        if (open) {
            form.reset({
                title: book.title,
                description: book.description,
                author: book.author,
                isbn: book.isbn,
                genre: book.genre ? book.genre : '',
                copies: book.copies,
                available: book.available
            });
        }
    }, [book, open, form]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("Updated data:", data);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-orange-500 font-bold hover:text-orange-600">
                    <FaEdit />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Book</DialogTitle>
                    <DialogDescription className="sr-only">
                        Make changes to your book here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Author */}
                            <FormField
                                control={form.control}
                                name="author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* ISBN */}
                            <FormField
                                control={form.control}
                                name="isbn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ISBN</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Genre */}
                            <FormField
                                control={form.control}
                                name="genre"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Genre</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={Array.isArray(field.value) ? field.value[0] : field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Genre" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="FICTION">FICTION</SelectItem>
                                                <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                <SelectItem value="FANTASY">FANTASY</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* Copies */}
                            <FormField
                                control={form.control}
                                name="copies"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Copies</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Available */}
                            <FormField
                                control={form.control}
                                name="available"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-4">
                                        <FormLabel>Available</FormLabel>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <DialogFooter className="pt-4">
                                <Button type="submit">Update Book</Button>
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateBookModal;
