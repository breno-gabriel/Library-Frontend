import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from 'axios'; // Importar Axios
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
import WrapperCard from './WrapperCard';

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
    seller_name: z.string().min(2, {
        message: "O nome do vendedor precisa de pelo menos dois caracteres.",
    }).max(250, {
        message: "Limite de 250 caracteres excedido.",
    }),
    image: z.string().optional(),
});

const SaleForms = ({setForms}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            publisher: "",
            price: "",
            description: "",
            year: "",
            seller_name: "",
            image: "",
        },
    });

    const handleCancelCLick = () => {
        setForms(false); 
    }

    const onSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:3000/books', values);
            console.log('Response:', response.data);
            setForms(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 mt-40 z-30 fixed bg-white p-20">
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
                            {/* <FormField
                                control={form.control}
                                name="seller_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome do vendedor</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o seu nome completo" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                        </div>
                    </div>
                    <div className='flex justify-center gap-10'>
                        <Button type="submit" className="text-white bg-green-300">Confirmar</Button>
                        <Button onClick={handleCancelCLick} type="button" className="text-white bg-green-300">Cancelar</Button>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default SaleForms;
