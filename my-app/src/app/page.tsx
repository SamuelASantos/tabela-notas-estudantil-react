import { TableStudents } from "@/components/TableStudents";
import { students } from "@/data/students";

export default function Page() {
  return (
    <div>
      <TableStudents
        students={students}
      />
    </div>
  );
}