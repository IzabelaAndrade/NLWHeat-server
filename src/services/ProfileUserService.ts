
import prismaClient from "../prisma";

class ProfileUserService {
  async execute(user_id: string) {
    const userData = await prismaClient.user.findFirst({
      where: {
        id : user_id
      }
    })

    return userData;
  }
}

export {ProfileUserService}