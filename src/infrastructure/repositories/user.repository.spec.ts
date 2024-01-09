import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../domain/models/user.model';

describe('UserRepository', () => {
  let userRepository: UserRepository;
  let mockUserRepository = {
    findOne: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  describe('findById', () => {
    it('should find a user by id', async () => {
      const mockUser = { id: 1, username: 'testUser' };
      mockUserRepository.findOne.mockResolvedValue(mockUser);
      const result = await userRepository.findById(1);
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(result).toEqual(mockUser);
    });
  });

  describe('findOneByUsername', () => {
    it('should find a user by username', async () => {
      const mockUser = { id: 1, username: 'testUser' };
      mockUserRepository.findOne.mockResolvedValue(mockUser);
      const result = await userRepository.findOneByUsername('testUser');
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { username: 'testUser' } });
      expect(result).toEqual(mockUser);
    });
  });

  describe('saveUser', () => {
    it('should save a user', async () => {
      const mockUser = { id: 1, username: 'testUser', password: 'testPassword' };
      mockUserRepository.save.mockResolvedValue(mockUser);
      const result = await userRepository.saveUser(mockUser);
      expect(mockUserRepository.save).toHaveBeenCalledWith(mockUser);
      expect(result).toEqual(mockUser);
    });
  });
});
