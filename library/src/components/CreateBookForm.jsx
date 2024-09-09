import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
    description: z.string().optional(),
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

const CreateBookForm = ({ setForms, advice, setAdvice, setMessage }) => {
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

    const handleCancelCLick = () => {
        setForms(false);
    };

    const onSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:3000/books', values);
            console.log('Response:', response.data);
            setForms(false);
            setMessage("Livro cadastrado com sucesso");
            setAdvice(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="flex flex-col justify-center items-center max-w-lg w-full bg-white rounded-md p-4 md:p-8 h-[90vh] max-h-[90vh] overflow-hidden">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full space-y-6">
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-center font-bold text-3xl'>Adicionando livro</h2>
                            <p className='text-center text-gray-500 text-lg'>Preencha os campos abaixo</p>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-10 flex-grow overflow-auto'>
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
                                                    <SelectTrigger className="w-full">
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
                        <div className='flex justify-center gap-5'>
                            <Button type="submit" className="text-white bg-green-300 w-full md:w-32">Confirmar</Button>
                            <Button onClick={handleCancelCLick} type="button" className="text-white bg-red-300 w-full md:w-32">Cancelar</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default CreateBookForm;
