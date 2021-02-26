import { ReverseDto } from '../dtos/reverse.dto';

class ReverseService {
  public reverse = async (inputString: string): Promise<ReverseDto> => {
    // TODO: fix the class to return appropriate payload
    const reverseDto = new ReverseDto();
    // TODO: add service logic
    return reverseDto;
  };
}

export default ReverseService;
