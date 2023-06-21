import { 
    IoLogoBitcoin, 
    IoCart, 
    IoBarChart, 
    IoBook, 
    IoCodeSharp, 
    IoDesktop, 
    IoRocket, 
    IoPeople,
    IoHandRight,
    IoHeadset,
    IoHeart
} from 'react-icons/io5';
import CoursesDataProps from '@/interfaces/courses-features';
import IValues from '@/interfaces/values';


export const aboutUs = {
    heading: "",
    content: ""
};

export const coursesFeaturesData: Array<CoursesDataProps> = [
    {
        heading: "Cryptocurrency",
        icon: IoBarChart,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit temporibus.vNulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
    },
    {
        heading: "Web design & development",
        icon: IoCodeSharp,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit temporibus.vNulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
    },
    {
        heading: "Digital marketing",
        icon: IoCart,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit temporibus.vNulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
    },
    {
        heading: "Blockchain Development",
        icon: IoLogoBitcoin,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit temporibus.vNulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
    },{
        heading: "Content Creation",
        icon: IoBook,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit temporibus.vNulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
    },
    {
        heading: "UI/UX",
        icon: IoDesktop,
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit temporibus.vNulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
    }
]

export const values: IValues = {
    heading: "Our values",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum at a consequatur deleniti excepturi, explicabo odio fugiat et asperiores enim quam odit inventore quia, fuga sit illum dolores. Dolorum.",
    list: [
        {
            heading: "Take responsiblity",
            icon: IoHandRight,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt"
        },
        {
            heading: "Be supportive",
            icon: IoPeople,
            content: "Illo praesentium, iure corporis consectetur laudantium ab culpa dolor quae velit"
        },
        {
            heading: "Be world-class",
            icon: IoRocket,
            content: "Alias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!"
        },
        {
            heading: "Always learning",
            icon: IoHeadset,
            content: "Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure"
        },
        {
            heading: "Enjoy downtime",
            icon: IoHeart,
            content: "ulla, cupiditate aspernatur suscipit ea praesentium molestiae"
        },
        {
            heading: "Share everything we know",
            icon: IoDesktop,
            content: "Debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis"
        }
    ]
}   