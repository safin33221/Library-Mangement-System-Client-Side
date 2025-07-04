import { Form, FormControl, FormField, FormItem, FormLabel } from "@/Components/ui/form"
import { Switch } from "@/Components/ui/switch"
import { Input } from "@/Components/ui/input"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { Button } from "@/Components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { useCreateBookMutation } from "@/redux/api/baseApi"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import toast from "react-hot-toast"
import { useState } from "react"

const AddBookModal = () => {
    const form = useForm()
    const [open, setOpen] = useState(false)
    const [createBook] = useCreateBookMutation()
    const onSubmit: SubmitHandler<FieldValues> = (bookData) => {
        createBook(bookData)
        toast.success("Book Added Successfully")
        setOpen(false)
        form.reset()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="text-orange-500 font-bold hover:text-orange-600">ADD Book</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Book</DialogTitle>
                        <DialogDescription className="sr-only">
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Form {...form}>

                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {/* Title */}
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="The Theory of Everything" {...field} />
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
                                                <Input placeholder="Overview of cosmology..." {...field} />
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
                                                <Input placeholder="Stephen Hawking" {...field} />
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
                                                <Input placeholder="9780553380163" {...field} />
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
                                            <FormLabel>Email</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                                    placeholder="5"
                                                    {...field}
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                {/* Available (boolean switch) */}
                                <FormField
                                    control={form.control}
                                    name="available"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center gap-4">
                                            <FormLabel>Available</FormLabel>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    defaultChecked={true}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
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
    )
}


export default AddBookModal;    