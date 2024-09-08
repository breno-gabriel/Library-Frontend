import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { z } from "zod";

const currentYear = new Date().getFullYear();

const formSchema = z.object({
    title: z.string().min(2, {
        message: "O título precisa de pelo menos dois caracteres.",
    }).max(250, {
        message: "Limite de 250 caracteres excedido.",
    }),
    author: z.string().min(2, {
        message: "O nome do autor precisa de pelo menos dois caracteres.",
    }).max(250, {
        message: "Limite de 250 caracteres excedido.",
    }),
    publisher: z.string().min(2, {
        message: "O nome da editora precisa de pelo menos dois caracteres.",
    }).max(250, {
        message: "Limite de 250 caracteres excedido.",
    }),
    price: z.string().refine((value) => /^\d+(\.\d{1,2})?$/.test(value), {
        message: "O preço precisa estar no formato correto (e.g., 10.00).",
    }),
    description: z.string().max(250, {
        message: "Limite de 250 caracteres excedido.",
    }).optional(),
    year: z.string().refine((value) => {
        const year = parseInt(value, 10);
        return !isNaN(year) && year > 0 && year <= currentYear;
    }, {
        message: "Ano inválido. O ano deve estar no passado ou presente.",
    }),
    image: z.string().optional(),
    category: z.string().min(1, {
        message: "Categoria é obrigatória.",
    }),
});

const UpdateBookForms = ({ setUpdateForms, id }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            publisher: "",
            price: "",
            description: "",
            year: "",
            image: "",
            category: "", 
        },
    });

    const onSubmit = async (values) => {
        try {
            console.log(values)
            const response = await axios.put(`http://localhost:3000/books/${id}`, values);
            console.log('Livro atualizado:', response.data);
            setUpdateForms(false);
            return response.data;
          } catch (error) {
            console.error('Erro ao atualizar livro:', error);
            throw error;
          }
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-10 rounded-md w-full max-w-3xl">
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-center font-bold text-3xl'>Atualizando livro</h2>
                            <p className='text-center text-gray-500 text-lg'>Preencha os campos abaixo</p>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-20'>
                            <div className="w-full md:w-1/2 space-y-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Título da obra</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite aqui o título da obra" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="author"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Autor</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite aqui o nome do autor da obra" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="publisher"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Editora</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite aqui o nome da editora" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Preço</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite aqui o preço a ser cobrado pela obra" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Descrição</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Descreva aqui o conteúdo da obra" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Foto da obra</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Coloque uma URL pública" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="year"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Ano</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite o ano de lançamento da obra" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Categoria</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Selecione uma categoria" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Ficção científica">Ficção científica</SelectItem>
                                                        <SelectItem value="Terror">Terror</SelectItem>
                                                        <SelectItem value="Infantil">Infantil</SelectItem>
                                                        <SelectItem value="Didático">Didático</SelectItem>
                                                        <SelectItem value="Literatura">Literatura</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className='flex justify-center gap-10 mt-10'>
                            <Button type="submit" className="text-white bg-green-300">Confirmar</Button>
                            <Button onClick={() => setUpdateForms(false)} type="button" className="text-white bg-green-300">Cancelar</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default UpdateBookForms;
