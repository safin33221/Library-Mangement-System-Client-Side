import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/Components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/Components/ui/switch"

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

const AddBookModal = () => {
    const form = useForm()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
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
                                            <FormLabel>Genre</FormLabel>
                                            <FormControl>
                                                <Input placeholder="SCIENCE" {...field} />
                                            </FormControl>
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