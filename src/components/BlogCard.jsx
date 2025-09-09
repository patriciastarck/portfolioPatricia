import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import conversor from "../assets/conversorDeMoedasJava.png";

export function BlogCard() {
  return (
    <Card className=" bg-red-500 max-w-[12rem] overflow-hidden flex">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none flex"
      >
        <img src={conversor} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography className="text-sm" variant="h4" color="blue-gray">
          UI/UX Review Check
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-light text-sm"
        >
          Because it&apos;s about motivating the doers. Because I&apos;m here to
        </Typography>
      </CardBody>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={conversor} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography className="text-sm" variant="h4" color="blue-gray">
          UI/UX Review Check
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-light text-sm"
        >
          Because it&apos;s about motivating the doers. Because I&apos;m here to
        </Typography>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              url="https://vercel.com/patriciastarcks-projects/jogo"
              target="_blank"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <a href="https://jogo-henna-rho-92.vercel.app/" target="_blank">
            Teste
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
