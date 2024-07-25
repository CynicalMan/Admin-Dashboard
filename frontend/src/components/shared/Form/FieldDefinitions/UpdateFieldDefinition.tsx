const UpdateItemFormDefinition =  [
    {
        name: "userId",
        label: "User Id",
        disable: true,
        required: true,
        autoFocus: true,
        componentType: "text",
        type: "text",
        grid: "w-full sm:w-1/2",
    },
    {
        name: "title",
        label: "Title",
        disable: false,
        required: true,
        componentType: "text",
        type: "text",
        grid: "w-full sm:w-1/2",
    },
    {
        name: "completed",
        label: "Task Status",
        disable: false,
        componentType: "radio",
        options: [
        { value: "true", label: "Completed" },
        { value: "false", label: "In Progress" },
        ],
        grid: "w-full",
    },
];

export default UpdateItemFormDefinition;
