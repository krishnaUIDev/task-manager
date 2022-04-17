import { Task } from './task.model';
import { Controller, Get, Put, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTasks(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTasks(createTaskDto);
  }
}
