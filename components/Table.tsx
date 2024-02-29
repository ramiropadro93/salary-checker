import styles from '../public/Table.module.css';

function Table(props: any) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Position</th>
          <th className={styles.th}>Currency</th>
          <th className={styles.th}>Seniority</th>
          <th className={styles.th}>Salary</th>
          <th className={styles.th}>Reports</th>
        </tr>
      </thead>
      <tbody>
        {props.salaries.map((salary: any) => (
          <tr key={salary.id} className={styles.tr}>
            <td className={styles.td}>{salary.position}</td>
            <td className={styles.td}>{salary.currency}</td>
            <td className={styles.td}>{salary.seniority}</td>
            <td className={styles.td}>{salary.salary}</td>
            <td className={styles.td}>{salary.reports}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
