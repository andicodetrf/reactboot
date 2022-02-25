import { RouteComponentProps } from "react-router-dom";

export type IdTypes = number | string | undefined;

export interface IEmployee {
    id?: IdTypes;
    firstName: string;
    lastName: string;
    emailId: string;
}

export interface IForm {
    apiHandler: (employeeData: IEmployee) => void;
    header: string;
}

interface MatchParams {
    id?: string;
}

export interface RouteProps extends RouteComponentProps<MatchParams> { }

export type FormAndRouteProps = IForm & RouteProps