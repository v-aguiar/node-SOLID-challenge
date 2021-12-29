import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const userWithSameId = this.users.find((user) => user.id === id);

    if (!userWithSameId) {
      throw new Error("User not found!");
    }

    return userWithSameId;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const userWithSameEmail = this.users.find((user) => user.email === email);

    if (!userWithSameEmail) {
      throw new Error("User not found!");
    }

    return userWithSameEmail;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    if (receivedUser.admin) {
      throw new Error("User is already an admin!");
    }

    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });

    return receivedUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
