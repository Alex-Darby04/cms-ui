import { 
    Box, 
    Button, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
    Stack, 
    TextField, 
    ListSubheader,
    type SelectChangeEvent 
} from "@mui/material";
import { useState, useEffect } from "react";

// Define the shape of your category data for TypeScript
interface Category {
    id: string;
    category_name: string;
    category_group: string;
}

// Define the shape of the grouped object
interface GroupedCategories {
    [key: string]: Category[];
}

export default function TicketSubmitForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    
    // State to store the organized categories
    const [groupedCategories, setGroupedCategories] = useState<GroupedCategories>({});
    const [loading, setLoading] = useState(true);

    // Fetch and group data on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Assuming your env variable is the base URL, we append /categories
                const response = await fetch(`${import.meta.env.VITE_TICKET_SERVICE}/categories`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data: Category[] = await response.json();

                // Group the flat list by category_group
                const grouped = data.reduce((acc, item) => {
                    const groupName = item.category_group || 'Other';
                    if (!acc[groupName]) {
                        acc[groupName] = [];
                    }
                    acc[groupName].push(item);
                    return acc;
                }, {} as GroupedCategories);

                setGroupedCategories(grouped);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleSelectChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the POST request here to submit the ticket
        console.log({ title, desc, category });
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={3} sx={{ width: '400px' }}>
                    <h1>Submit a ticket</h1>
                    
                    <TextField
                        value={title}
                        id="title"
                        label="Title"
                        variant="outlined"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    
                    <TextField
                        value={desc}
                        id="desc"
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) => setDesc(e.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category"
                            value={category}
                            label="Category"
                            onChange={handleSelectChange}
                            disabled={loading} // Disable while loading
                        >
                            {loading ? (
                                <MenuItem disabled>Loading...</MenuItem>
                            ) : (
                                // Map over the groups
                                Object.keys(groupedCategories).map((groupName) => [
                                    // 1. Render the Header
                                    <ListSubheader key={`header-${groupName}`}>
                                        {groupName}
                                    </ListSubheader>,
                                    
                                    // 2. Render the items in that group
                                    ...groupedCategories[groupName].map((cat) => (
                                        <MenuItem key={cat.id} value={cat.id}>
                                            {cat.category_name}
                                        </MenuItem>
                                    ))
                                ])
                            )}
                        </Select>
                    </FormControl>

                    <Button type="submit" variant="contained" size="large">
                        Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}