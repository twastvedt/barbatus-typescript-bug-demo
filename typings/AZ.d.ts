//MongoDB documents
interface Project {
	_id?: string;
	name: string;
	description: string;
	isTemplate: boolean;
	state: string;
	budgetEstimate?: number;
	projectNumber?: string;
}
