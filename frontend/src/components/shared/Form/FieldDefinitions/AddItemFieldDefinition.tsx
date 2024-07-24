// AddItemFieldDefinition.ts
const AddItemFormDefinition = [
    {
        name: "userId",
        label: "User Id",
        required: true,
        autoFocus: true,
        componentType: "text",
        type: "text",
        grid: "w-full sm:w-1/2",
    },
    {
        name: "title",
        label: "Title",
        required: true,
        componentType: "text",
        type: "text",
        grid: "w-full sm:w-1/2",
    },
    {
        name: "completed",
        label: "Task Status",
        componentType: "radio",
        options: [
        { value: "true", label: "Completed" },
        { value: "false", label: "In Progress" },
        ],
        grid: "w-full",
    },
];

export default AddItemFormDefinition;
