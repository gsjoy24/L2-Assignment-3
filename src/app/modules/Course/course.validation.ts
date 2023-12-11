import { z } from 'zod';

const CourseValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
      })
      .trim()
      .nonempty({
        message: 'Title cannot be empty',
      }),
    instructor: z
      .string({
        required_error: 'Instructor is required',
        invalid_type_error: 'Instructor must be a string',
      })
      .trim()
      .nonempty({
        message: 'Instructor cannot be empty',
      }),
    categoryId: z
      .string({
        required_error: 'Category is required',
        invalid_type_error: 'Category must be a string',
      })
      .trim()
      .nonempty({
        message: 'Category cannot be empty',
      }),
    price: z
      .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number',
      })
      .nonnegative({
        message: 'Price cannot be negative',
      }),
    tags: z.array(
      z.object({
        name: z
          .string({
            required_error: 'Tag name is required',
            invalid_type_error: 'Tag name must be a string',
          })
          .trim()
          .nonempty({
            message: 'Tag name cannot be empty',
          }),
      }),
    ),

    startDate: z
      .string({
        required_error: 'Start date is required',
        invalid_type_error: 'Start date must be a string',
      })
      .trim()
      .nonempty({
        message: 'Start date cannot be empty',
      }),
    endDate: z
      .string({
        required_error: 'End date is required',
        invalid_type_error: 'End date must be a string',
      })
      .trim()
      .nonempty({
        message: 'End date cannot be empty',
      }),
    language: z
      .string({
        required_error: 'Language is required',
        invalid_type_error: 'Language must be a string',
      })
      .trim()
      .nonempty({
        message: 'Language cannot be empty',
      }),
    provider: z
      .string({
        required_error: 'Provider is required',
        invalid_type_error: 'Provider must be a string',
      })
      .trim()
      .nonempty({
        message: 'Provider cannot be empty',
      }),
    details: z.object({
      level: z
        .string({
          required_error: 'Level is required',
          invalid_type_error: 'Level must be a string',
        })
        .trim()
        .nonempty({
          message: 'Level cannot be empty',
        }),
      description: z
        .string({
          required_error: 'Description is required',
          invalid_type_error: 'Description must be a string',
        })
        .trim()
        .nonempty({
          message: 'Description cannot be empty',
        }),
    }),
  }),
});

const CourseValidators = {
  CourseValidationSchema,
};

export default CourseValidators;
