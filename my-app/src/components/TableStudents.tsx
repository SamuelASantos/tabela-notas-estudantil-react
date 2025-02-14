import { Student } from "@/types/Student";

type StudentsProp = {
    students: Student[];
}

export function TableStudents({ students }: StudentsProp) {
    return (
        <div className="w-4/5 m-auto">
            <h1 className="text-3xl text-center p-3">Lista dos alunos</h1>
            <table className="w-full">
                <thead className="bg-gray-200 text-black">
                    <tr className="text-center">
                        <th className="text-left p-3 rounded-l-md">Nome</th>
                        <th>Status</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th className="p-3 rounded-r-md">Nota Final</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {students.map(item => (
                        <tr key={item.id}>
                            <td className="flex p-3">
                                <img className="rounded-full w-16 ml-5" src={item.avatar} alt={item.name} />
                                <div className="ml-3">
                                    <div>{item.name}</div>
                                    <div>{item.email}</div>
                                </div>
                            </td>
                            <td>
                                {item.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white">Ativado</div>}
                                {!item.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white">Desativado</div>}
                            </td>
                            <td>{item.grade1}</td>
                            <td>{item.grade2}</td>
                            <td>
                                {item.active && ((item.grade1 + item.grade2) / 2).toFixed(1) || "--"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
