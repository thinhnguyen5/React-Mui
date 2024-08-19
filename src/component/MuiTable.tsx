import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Clarine",
    last_name: "McLaggan",
    email: "cmclaggan0@fema.gov",
    gender: "Female",
    ip_address: "91.118.102.57",
  },
  {
    id: 2,
    first_name: "Stillman",
    last_name: "Tace",
    email: "stace1@deliciousdays.com",
    gender: "Male",
    ip_address: "23.175.247.97",
  },
  {
    id: 3,
    first_name: "Marget",
    last_name: "Velte",
    email: "mvelte2@paginegialle.it",
    gender: "Female",
    ip_address: "133.68.74.218",
  },
  {
    id: 4,
    first_name: "Renie",
    last_name: "Blackley",
    email: "rblackley3@plala.or.jp",
    gender: "Female",
    ip_address: "97.195.114.103",
  },
  {
    id: 5,
    first_name: "Selestina",
    last_name: "Aggio",
    email: "saggio4@ask.com",
    gender: "Female",
    ip_address: "73.26.48.218",
  },
  {
    id: 6,
    first_name: "Kahaleel",
    last_name: "Imort",
    email: "kimort5@rediff.com",
    gender: "Male",
    ip_address: "69.35.247.250",
  },
  {
    id: 7,
    first_name: "Hatty",
    last_name: "Feakins",
    email: "hfeakins6@bbb.org",
    gender: "Female",
    ip_address: "6.99.252.109",
  },
  {
    id: 8,
    first_name: "Gabriell",
    last_name: "MacDermot",
    email: "gmacdermot7@spotify.com",
    gender: "Female",
    ip_address: "203.158.54.236",
  },
  {
    id: 9,
    first_name: "Cami",
    last_name: "Symcock",
    email: "csymcock8@ihg.com",
    gender: "Female",
    ip_address: "124.214.171.124",
  },
  {
    id: 10,
    first_name: "Brodie",
    last_name: "Trillow",
    email: "btrillow9@fotki.com",
    gender: "Male",
    ip_address: "242.111.142.76",
  },
];

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
