export class Experience {
    companyName: string;
    positions: Position[];
}

class Position {
    name: string;
    startDate: Date;
    endDate: Date;
    highlights: string[];
}