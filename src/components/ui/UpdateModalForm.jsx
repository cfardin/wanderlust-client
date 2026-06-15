"use client";

import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Surface,
    TextArea,
    TextField,
    Select,
} from "@heroui/react";
import { useRouter } from "next/navigation"

import React from "react";

const UpdateModalForm = ({ destination }) => {
    const router = useRouter();
    const {
        _id,
        destinationName,
        country,
        price,
        duration,
        imageUrl,
        description,
        departureDate,
        category,
    } = destination;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());

        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedDestination),
        });

        if (res.ok) {
            const data = await res.json();
            alert("Destination updated successfully!");
            router.refresh(); // ✅ Tells Next.js to fetch the fresh data from the backend
        } else {
            alert("Failed to update destination.");
        }
    };

    return (
        <Modal>
            <Button variant="secondary">Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="max-w-md md:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="text-2xl mb-5">
                                Update Your Destination
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="">
                            <Surface variant="default">
                                <form
                                    onSubmit={onSubmit}
                                    className="space-y-8 "
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="destinationName"
                                                defaultValue={destinationName}
                                                isRequired
                                            >
                                                <Label>Destination Name</Label>
                                                <Input
                                                    placeholder="Bali Paradise"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField
                                            name="country"
                                            defaultValue={country}
                                            isRequired
                                        >
                                            <Label>Country</Label>
                                            <Input
                                                placeholder="Indonesia"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Category */}
                                        <div>
                                            <Select
                                                name="category"
                                                defaultSelectedKey={category}
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                            >
                                                <Label>Category</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item
                                                            id="Beach"
                                                            textValue="Beach"
                                                        >
                                                            Beach
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="Mountain"
                                                            textValue="Mountain"
                                                        >
                                                            Mountain
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="City"
                                                            textValue="City"
                                                        >
                                                            City
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="Adventure"
                                                            textValue="Adventure"
                                                        >
                                                            Adventure
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="Cultural"
                                                            textValue="Cultural"
                                                        >
                                                            Cultural
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item
                                                            id="Luxury"
                                                            textValue="Luxury"
                                                        >
                                                            Luxury
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Price */}
                                        <TextField
                                            name="price"
                                            type="number"
                                            defaultValue={price}
                                            isRequired
                                        >
                                            <Label>Price (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField
                                            name="duration"
                                            defaultValue={duration}
                                            isRequired
                                        >
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="7 Days / 6 Nights"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="departureDate"
                                                type="date"
                                                defaultValue={departureDate}
                                                isRequired
                                            >
                                                <Label>Departure Date</Label>
                                                <Input
                                                    type="date"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="imageUrl"
                                                defaultValue={imageUrl}
                                                isRequired
                                            >
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/bali-paradise.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="description"
                                                defaultValue={description}
                                                isRequired
                                            >
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="Describe the travel experience..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className="border-cyan-500"
                                            type="submit"
                                        >
                                            Update
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateModalForm;
