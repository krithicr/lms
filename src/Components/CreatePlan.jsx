import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Option,
    Select,
    Typography
} from "@material-tailwind/react";
import { useRef, useState } from "react";

export function CreatePlan() {
    const [description, setDescription] = useState('');
    const [batch, setBatch] = useState(''); // Set initial state for batch
    const [type, setType] = useState(''); // Set initial state for type
    const anchorRef = useRef(null);

    // const handleDescriptionChange = (event) => {
    //     setDescription(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form data:", {
            batch: batch, // Use batch state instead of event.target.batch.value
            title: event.target.title.value,
            type: type, // Use type state instead of event.target.type.value
            description: description,
            start_date: event.target.start_date.value,
            end_date: event.target.end_date.value
        });

        event.target.reset();
        setDescription('');
    };

    const handleAddPlan = () => {
        anchorRef.current.click();
    };
    return (
        <Card className="mt-6 w-full md:w-3/4 lg:w-2/4 xl:w-2/4 mx-auto ">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h5" color="white" className="mb-2">
                    Add Learning Plan
                </Typography>
            </CardHeader>
            <CardBody>
                <form className='container p-6 bg-white rounded-lg' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Select variant="outlined" label="Batch Name" id="batch" name="batch" value="batch" onChange={(e) => setBatch(e.target.value)}>
                            <Option value='batch1'>Batch1</Option>
                            <Option value="batch2">Batch2</Option>
                            <Option value="batch3">Batch3</Option>
                            <Option value="od102">OD102</Option>
                            <Option value="ow101">OW101</Option>

                        </Select>
                    </div>
                    <div className="mb-4">
                        <Select variant="outlined" label="Type" id="Type" name="Type" value="Type" onChange={(e) => setType(e.target.value)}>
                            <Option value='batch1'>BOOTCAMP</Option>
                            <Option value="on_demand">ON-DEMAND</Option>
                            <Option value="mandatory">MANDATORY</Option>
                            <Option value="org_wide">ORG-WIDE</Option>


                        </Select>
                    </div>
                    <div className='mb-4'>
                        <Input id="start_date" name="start_date" type="date" variant="outlined" label="Start date" InputLabelProps={{
                            shrink: true,
                        }} />
                    </div>
                    <div className='mb-4'>
                        <Input id="end_date" name="end_date" type="date" variant="outlined" label="End date" InputLabelProps={{
                            shrink: true,
                        }} />
                    </div>


                    <div className="mb-4 flex justify-end">

                        <Button ripple={true} onClick={handleAddPlan}>
                            <a ref={anchorRef} href="/learningpath" style={{ display: 'none' }}></a>
                            Add Plan
                        </Button>

                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
