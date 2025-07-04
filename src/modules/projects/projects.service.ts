import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProjectDto) {
    return await this.prisma.project.create({
      data: dto,
    });
  }

  async findAll() {
    return await this.prisma.project.findMany({
      include: {
        owner: true,
        tasks: true,
        members: true,
      },
    });
  }

  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        owner: true,
        tasks: true,
        members: true,
      },
    });

    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async findAllByOwnerId(user_id: string){
    const projects = await this.prisma.project.findMany({
      where : {ownerId : user_id},
      include: {
        owner: true,
        tasks: true,
        members: true,
      },
    });

    return projects
  }

  async update(id: string, updateDto: UpdateProjectDto) {
    return await this.prisma.project.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.project.delete({
      where: { id },
    });
  }
}
