import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findDrafts(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
    }[]>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
