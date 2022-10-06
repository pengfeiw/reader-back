define({ "api": [
  {
    "type": "get",
    "url": "/article/latest?count={count}&author={author}",
    "title": "获得最近的几篇文章",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "count",
            "description": "<p>需要获得的文章数量</p>"
          },
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "author",
            "description": "<p>文章作者姓名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>文章名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coerSrc",
            "description": "<p>文章封面</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>作品描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.time",
            "description": "<p>作品时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorName",
            "description": "<p>作者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.classificationId",
            "description": "<p>所属分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.viewCount",
            "description": "<p>浏览数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.messageCount",
            "description": "<p>留言数量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/article.ts",
    "groupTitle": "Article",
    "name": "GetArticleLatestCountCountAuthorAuthor"
  },
  {
    "type": "get",
    "url": "/artilce/:id",
    "title": "获取一个文章的详细信息",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathParams",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>文章名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>文章时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.classificationId",
            "description": "<p>文章所属分类的id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.classificationName",
            "description": "<p>文章所属分类的名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.viewCount",
            "description": "<p>浏览量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.messageCount",
            "description": "<p>留言数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>作者姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "Message[]",
            "optional": false,
            "field": "data.message",
            "description": "<p>留言列表</p>"
          }
        ],
        "Message": [
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>留言id</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "person",
            "description": "<p>留言者</p>"
          },
          {
            "group": "Message",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>留言时间</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/article.ts",
    "groupTitle": "Article",
    "name": "GetArtilceId"
  },
  {
    "type": "patch",
    "url": "/article/description",
    "title": "修改文章描述和封面",
    "group": "Article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverSrc",
            "description": "<p>文章封面</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/article.ts",
    "groupTitle": "Article",
    "name": "PatchArticleDescription"
  },
  {
    "type": "post",
    "url": "/article/delete",
    "title": "删除一篇文章",
    "group": "Article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/article.ts",
    "groupTitle": "Article",
    "name": "PostArticleDelete"
  },
  {
    "type": "post",
    "url": "/article/upload",
    "title": "上传一篇文章",
    "group": "Article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FormData",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          },
          {
            "group": "Parameter",
            "type": "FormData",
            "optional": false,
            "field": "classificationId",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "FormData",
            "optional": false,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Parameter",
            "type": "FormData",
            "optional": false,
            "field": "coverSrc",
            "description": "<p>文章封面</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>文章名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>文章上传时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.viewCount",
            "description": "<p>浏览量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.classificationId",
            "description": "<p>文章所属分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorName",
            "description": "<p>作者名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/article.ts",
    "groupTitle": "Article",
    "name": "PostArticleUpload"
  },
  {
    "type": "post",
    "url": "/authentication/login",
    "title": "登录后台管理",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordMd5",
            "description": "<p>账户密码的md5</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author-name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author-email",
            "description": "<p>用户邮箱</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/authentication.ts",
    "groupTitle": "Authentication",
    "name": "PostAuthenticationLogin"
  },
  {
    "type": "get",
    "url": "/author/avatar?authorName={authorName}",
    "title": "根据作者名称获取头像地址",
    "group": "Author",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "authorName",
            "description": "<p>作者名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>头像相对地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/author.ts",
    "groupTitle": "Author",
    "name": "GetAuthorAvatarAuthornameAuthorname"
  },
  {
    "type": "get",
    "url": "/author/total-info?authorName={authorName}",
    "title": "根据作者名称获取累计信息",
    "group": "Author",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "authorName",
            "description": "<p>作者姓名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.articleCount",
            "description": "<p>文章数量</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.commentCount",
            "description": "<p>文章留言数量</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.viewCount",
            "description": "<p>文章阅读量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/author.ts",
    "groupTitle": "Author",
    "name": "GetAuthorTotalInfoAuthornameAuthorname"
  },
  {
    "type": "patch",
    "url": "/author/avatar/upload",
    "title": "上传头像",
    "group": "Author",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "FormData",
            "optional": false,
            "field": "file",
            "description": "<p>头像文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>头像相对地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/author.ts",
    "groupTitle": "Author",
    "name": "PatchAuthorAvatarUpload"
  },
  {
    "type": "patch",
    "url": "/author/update-email",
    "title": "修改用户邮箱",
    "group": "Author",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyCode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/author.ts",
    "groupTitle": "Author",
    "name": "PatchAuthorUpdateEmail"
  },
  {
    "type": "patch",
    "url": "/author/update-password",
    "title": "修改密码",
    "group": "Author",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyCode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/author.ts",
    "groupTitle": "Author",
    "name": "PatchAuthorUpdatePassword"
  },
  {
    "type": "post",
    "url": "/author/create",
    "title": "创建用户",
    "group": "Author",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户账户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户登录密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/author.ts",
    "groupTitle": "Author",
    "name": "PostAuthorCreate"
  },
  {
    "type": "get",
    "url": "/classification/all",
    "title": "获取所有分类",
    "group": "Classification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Classification[]",
            "optional": false,
            "field": "data",
            "description": "<p>所有分类</p>"
          }
        ],
        "Classification": [
          {
            "group": "Classification",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Classification",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/classification.ts",
    "groupTitle": "Classification",
    "name": "GetClassificationAll"
  },
  {
    "type": "get",
    "url": "/classification/author?authorName={authorName}",
    "title": "获取指定author的分类",
    "group": "Classification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "authorName",
            "description": "<p>作者姓名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Classification[]",
            "optional": false,
            "field": "data",
            "description": "<p>所有分类</p>"
          }
        ],
        "Classification": [
          {
            "group": "Classification",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Classification",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/classification.ts",
    "groupTitle": "Classification",
    "name": "GetClassificationAuthorAuthornameAuthorname"
  },
  {
    "type": "get",
    "url": "/classification/:id",
    "title": "获取指定id的分类的详细信息",
    "group": "Classification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathParam",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Article[]",
            "optional": false,
            "field": "data.articles",
            "description": "<p>分类下的文章</p>"
          }
        ],
        "Article": [
          {
            "group": "Article",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Article",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>文章名称</p>"
          },
          {
            "group": "Article",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Article",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>文章时间</p>"
          },
          {
            "group": "Article",
            "type": "String",
            "optional": false,
            "field": "classificationId",
            "description": "<p>文章所属分类id</p>"
          },
          {
            "group": "Article",
            "type": "String",
            "optional": false,
            "field": "classificationName",
            "description": "<p>文章所属分类名称</p>"
          },
          {
            "group": "Article",
            "type": "Number",
            "optional": false,
            "field": "viewCount",
            "description": "<p>文章阅读量</p>"
          },
          {
            "group": "Article",
            "type": "Number",
            "optional": false,
            "field": "messageCount",
            "description": "<p>文章留言数量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/classification.ts",
    "groupTitle": "Classification",
    "name": "GetClassificationId"
  },
  {
    "type": "patch",
    "url": "/classification/rename",
    "title": "重命名一个分类",
    "group": "Classification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newName",
            "description": "<p>分类名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/classification.ts",
    "groupTitle": "Classification",
    "name": "PatchClassificationRename"
  },
  {
    "type": "post",
    "url": "/classification/insert",
    "title": "添加一个分类",
    "group": "Classification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "classificationName",
            "description": "<p>分类名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorName",
            "description": "<p>作者名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/classification.ts",
    "groupTitle": "Classification",
    "name": "PostClassificationInsert"
  },
  {
    "type": "post",
    "url": "/classification/remove",
    "title": "删除一个分类",
    "group": "Classification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/classification.ts",
    "groupTitle": "Classification",
    "name": "PostClassificationRemove"
  },
  {
    "type": "get",
    "url": "/email/verifycode?email={email}",
    "title": "获取验证码",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱账号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/email.ts",
    "groupTitle": "Email",
    "name": "GetEmailVerifycodeEmailEmail"
  },
  {
    "type": "delete",
    "url": "/message/delete",
    "title": "根据文章id，查询消息",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "msgId",
            "description": "<p>留言id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/message.ts",
    "groupTitle": "Message",
    "name": "DeleteMessageDelete"
  },
  {
    "type": "get",
    "url": "/message?articleId={articleId}",
    "title": "根据文章id，查询消息",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Message[]",
            "optional": false,
            "field": "data",
            "description": "<p>留言</p>"
          }
        ],
        "Message": [
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>留言id</p>"
          },
          {
            "group": "Message",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>留言时间</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "data.person",
            "description": "<p>留言者</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/message.ts",
    "groupTitle": "Message",
    "name": "GetMessageArticleidArticleid"
  },
  {
    "type": "get",
    "url": "/message/author?articleName={articleName}&viewed={viewed}&pageSize={pageSize}&pageIndex={pageIndex}",
    "title": "根据文章id，查询消息",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "articleName",
            "description": "<p>文章名称</p>"
          },
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "viewed",
            "description": "<p>消息是否被看过，取值&quot;yes&quot;|&quot;no&quot;|&quot;all&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页多少条留言</p>"
          },
          {
            "group": "Parameter",
            "type": "PathQuery",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Message[]",
            "optional": false,
            "field": "data",
            "description": "<p>留言</p>"
          }
        ],
        "Message": [
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>留言id</p>"
          },
          {
            "group": "Message",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>留言时间</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "person",
            "description": "<p>留言者</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>留言者邮箱</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "articleName",
            "description": "<p>留言文章</p>"
          },
          {
            "group": "Message",
            "type": "String",
            "optional": false,
            "field": "viewed",
            "description": "<p>留言是否已被作者查看</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/message.ts",
    "groupTitle": "Message",
    "name": "GetMessageAuthorArticlenameArticlenameViewedViewedPagesizePagesizePageindexPageindex"
  },
  {
    "type": "patch",
    "url": "/message/viewed",
    "title": "根据文章id，查询消息",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "msgIds",
            "description": "<p>留言id数组</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/message.ts",
    "groupTitle": "Message",
    "name": "PatchMessageViewed"
  },
  {
    "type": "post",
    "url": "/message/insert",
    "title": "根据文章id，查询消息",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "person",
            "description": "<p>留言者</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>留言者邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>留言id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>留言时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/message.ts",
    "groupTitle": "Message",
    "name": "PostMessageInsert"
  }
] });
