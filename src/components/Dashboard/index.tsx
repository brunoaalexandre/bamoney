import { Summary } from "../Summary";

import { Container } from "../Dashboard/styles";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
