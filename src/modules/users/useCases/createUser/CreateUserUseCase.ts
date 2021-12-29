import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const isEmailAlreadyRegistered = this.usersRepository.findByEmail(email);

    if (isEmailAlreadyRegistered) {
      throw new Error("User already registered!");
    }

    const newUser = this.usersRepository.create({ name, email });

    return newUser;
  }
}

export { CreateUserUseCase };
