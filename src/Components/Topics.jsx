import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Typography
} from "@material-tailwind/react";
import { useState } from "react";

export function Topics() {
    const [topics, setTopics] = useState([{ title: '', description: '' }]);

    const handleAddTopic = () => {
        setTopics([...topics, { title: '', description: '' }]);
    };

    const handleDeleteTopic = (index) => {
        const newTopics = [...topics];
        newTopics.splice(index, 1);
        setTopics(newTopics);
    };

    const handleChange = (index, e) => {
        const newTopics = [...topics];
        newTopics[index][e.target.name] = e.target.value;
        setTopics(newTopics);
    };

    const handleSubmitAllTopics = (e) => {
        e.preventDefault();
        console.log(topics); // Here you can handle the submission of all topics
    };
    return (
        <Card className="mt-6 w-full md:w-3/4 lg:w-2/4 xl:w-2/4 mx-auto ">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h5" color="white" className="mb-2">
                Add Topics
                </Typography>
            </CardHeader>
            <CardBody>
                <form className='container p-6 bg-white rounded-lg' onSubmit={handleSubmitAllTopics}>
                    <div className="mb-4">
                    {topics.map((topic, index) => (
                        <div key={index}className="flex flex-col gap-1">
                            <div className='form-group mt-1'>
                                <Input
                                    id={`title${index}`}
                                    name='title'
                                    label='Topic Name'
                                    value={topic.title}
                                    onChange={(e) => handleChange(index, e)}
                                    variant='outlined'
                                    fullWidth
                                    margin='normal'
                                />
                            </div>
                            <Button variant="contained" className="" onClick={() => handleDeleteTopic(index)}>Delete</Button>
                        </div>
                    ))}
                    </div>
                   
                  


                    <div className="mb-4 flex flex-col md:flex-row justify-around gap-1">

                        <Button rvariant="gradient" onClick={handleAddTopic}>+</Button>
                        <Button ripple={true} >Submit Topics and Finish</Button>

                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
