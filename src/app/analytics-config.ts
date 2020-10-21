export const analyticsMapTest = {
  EventTypes: {
    identify: {
      key: [
        "user//id",
      ],
      attr: {
        firstName: "user//firstName",
        lastName: "user//lastName",
      }
    },
    group: {
      key: [
        "user//organization_id",
      ],
      assocKey: [
        "user//id",
      ],
      attr: {
        name: "user//group.name",
        status: "user//status",
      }
    },
    track: {
      key: [
        "user//id"
      ],
      mapping: {
        1: {
          attr: {
            value: "user//firstName",
            commented: "user//commented",
          },
          action: {
            login_succeeded: "Succeeded Authentication into HR+Benefits",
            login_failed: "Failed Authentication into HR+Benefits",
          }
        },
        2: {
          attr: {
            value: "user//status"
          },
          action: {
            multi_map: "Multi",
          }
        }
      }
    },
    page: {
      key: [
        "user//id",
      ],
      attr: {
        userAgent: "page//userAgent",
        path: "page//path",
        referrer: "page//referrer",
        search: "page//search",
        title: "page//title",
        url: "page//url",
        ip: "page//ip",
        width: "page//width",
        height: "page//height",
      },
    },
  },
};