import s from "./page.module.css";
import { dataset } from "@/lib/dataset";

export default function Home() {
  return (
    <main className={s.main}>
      <table>
        {dataset.horarios.map((dias) => (
          <td key={dias.title}>
            <th>{dias.title}</th>
            {dias.horarios.map((horarios, index) => (
              <tr key={index}>
                <td> {horarios}</td>
                <td>
                  <tr>alumno</tr>
                  <tr>alumno</tr>
                  <tr>alumno</tr>
                  <tr>alumno</tr>
                  <tr>alumno</tr>
                  <tr>alumno</tr>
                </td>
              </tr>
            ))}
          </td>
        ))}
      </table>
    </main>
  );
}
