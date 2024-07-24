const UpdateItemFormDefinition = [
    {
        name: "title",
        label: "Title",
        required: true,
        autoFocus: true,
        componentType: "text",
        type: "text",
        grid: "w-full sm:w-1/2",
    },
    {
        name: "description",
        label: "Description",
        required: true,
        componentType: "text",
        type: "text",
        grid: "w-full",
    },
    {
        name: "priority",
        label: "Priority",
        componentType: "radio",
        options: [
        { value: "high", label: "High" },
        { value: "medium", label: "Medium" },
        { value: "low", label: "Low" },
        ],
        grid: "w-full",
    },
];

export default UpdateItemFormDefinition;
