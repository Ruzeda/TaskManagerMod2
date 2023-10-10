import { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, description });