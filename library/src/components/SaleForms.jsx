import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const SaleForms = () => {
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

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <WrapperCard label="Coloque o seu livro a venda" details="Preencha os campos abaixo">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6">
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
                                            <Input placeholder="Faça aqui o upload de um arquivo de foto do livro" {...field} />
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
                            />
                        </div>
                    </div>
                    <div className='flex justify-center gap-10'>
                        <Button type="submit">Confirmar</Button>
                        <Button type="button">Cancelar</Button>
                    </div>
                </form>
            </Form>
        </WrapperCard>
    );
}

export default SaleForms;
