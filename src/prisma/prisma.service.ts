import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const adapter = new PrismaMariaDb({
            host: process.env.DATABASE_HOST || '127.0.0.1',
            port: Number(process.env.DATABASE_PORT) || 3306,
            user: process.env.DATABASE_USER || 'root',
            password: process.env.DATABASE_PASSWORD ?? '',
            database: process.env.DATABASE_NAME || 'bt_sql',
            connectionLimit: 5,
            allowPublicKeyRetrieval: true,
        });
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}