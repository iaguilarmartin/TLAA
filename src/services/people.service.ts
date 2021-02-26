import { PeopleDto, PeopleRequest } from '../dtos/people.dto';

class PeopleService {
  public prescribe = async (peopleReq: PeopleRequest): Promise<PeopleDto> => {
    // TODO: Fix the interface within the class
    const peopleDto = new PeopleDto();
    // TODO: Add service logic
    return peopleDto;
  };
}

export default PeopleService;
