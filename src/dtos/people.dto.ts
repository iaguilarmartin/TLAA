export interface PeopleRequest {
  job: string;
  name: string;
  patients: Array<string>;
}

export interface PatientInfo {
  // TODO add more detail to the object
}

export class PeopleDto {
  public greeting: string;
  public patients: Array<PatientInfo>;
}
