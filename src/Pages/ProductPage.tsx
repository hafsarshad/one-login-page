import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

interface Product {
    key: string;
    title: string;
    price: number;
    category: string;
}

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map((item: any) => ({
                    key: item.id.toString(),
                    title: item.title,
                    price: item.price,
                    category: item.category,
                }));
                setProducts(formattedData);
            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
            });
    }, []);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
    ];

    return <Table columns={columns} dataSource={products} />;
};

export default ProductPage;
